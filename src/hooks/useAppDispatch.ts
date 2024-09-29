import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';

export const useAppDispatch = (): ReturnType<typeof useDispatch> =>
  useDispatch<AppDispatch>();
