import { formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: Date): string => {
  return formatDistance(
    date,
    new Date(),
    { locale: ru }
  );
};
