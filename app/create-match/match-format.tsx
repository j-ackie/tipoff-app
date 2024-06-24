import MatchFormatButton from '@/components/MatchFormatButton';
import TipoffTextInput from '@/components/TipoffTextInput';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import TextButton from '@/components/TextButton';
import Label from '@/components/Label';
import Game, { MatchFormat } from '@/firebase/models/game';
import { useCreateGame } from '@/firebase/queries/game';
import { createEntityWithoutId } from '@/firebase/models/utils';
import { useUser } from '@/providers/UserProvider';
import { router } from 'expo-router';

const MatchFormatScreen = () => {
  const { user } = useUser();
  const { mutate: createGame, isError, isPending, error } = useCreateGame();
  const [selectedFormat, setSelectedFormat] = useState<MatchFormat | null>(
    null
  );

  const currentDate = useMemo(() => new Date(), []);

  const [location, setLocation] = useState('');
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentDate);
  const [description, setDescription] = useState('');

  const datetime = new Date(date);
  datetime.setHours(time.getHours());
  datetime.setMinutes(time.getMinutes());

  const disabled = !user?.id || isPending || !selectedFormat || !location;

  const handleCreateMatch = () => {
    if (disabled) return;

    createGame(
      createEntityWithoutId<Game>({
        creatorId: user.id,
        location,
        format: selectedFormat,
        team1: {
          name: `${user.name}'s team`,
          playerIds: [user.id],
        },
        team2: {
          name: null,
          playerIds: [],
        },
        startTime: datetime,
      }),
      {
        onSuccess: () => router.replace('/'),
      }
    );
  };

  console.log(error);

  return (
    <View style={styles.container}>
      <View style={{ width: '100%', alignItems: 'center', gap: 10 }}>
        <Label>match format?</Label>
        <View style={styles.formatContainer}>
          <MatchFormatButton
            format={MatchFormat.ONE}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
          />
          <MatchFormatButton
            format={MatchFormat.TWO}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
          />
          <MatchFormatButton
            format={MatchFormat.THREE}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
          />
          <MatchFormatButton
            format={MatchFormat.FOUR}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
          />
          <MatchFormatButton
            format={MatchFormat.FIVE}
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
          />
        </View>
      </View>
      <TipoffTextInput onChangeText={setLocation} label="where?" />
      <TipoffTextInput onChangeText={setDescription} label="description" />
      <View style={{ width: '100%', gap: 10 }}>
        <Label>when?</Label>
        <View style={styles.datetime}>
          <DateTimePicker
            value={date}
            mode="date"
            minimumDate={currentDate}
            onChange={(_, date) => date && setDate(date)}
          />
          <DateTimePicker
            value={time}
            mode="time"
            minimumDate={currentDate}
            onChange={(_, time) => time && setTime(time)}
          />
        </View>
      </View>
      <TipoffTextInput label="get your team!" />
      <TextButton
        title="create"
        onPress={handleCreateMatch}
        disabled={disabled}
      />
    </View>
  );
};

export default MatchFormatScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  formatContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
  },
  datetime: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingRight: 20,
    borderRadius: 10,
  },
});
