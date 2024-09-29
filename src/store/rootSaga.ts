import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { getRepositoriesSagaWatcher } from '@/store/repositories';

export function* rootSaga(): SagaIterator<void> {
  yield all([fork(getRepositoriesSagaWatcher)]);
}
