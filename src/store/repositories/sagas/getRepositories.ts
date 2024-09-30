import { call, put, takeEvery } from 'redux-saga/effects';
import {
  errorGetRepositories,
  getRepositories,
  successGetRepositories,
  SuccessGetRepositoriesPayload,
} from '@/store/repositories';
import { getFromAPI } from '@/api';
import { VITE_REPOSITORIES_PER_PAGE } from '@/config';
import { setCurrentPage, setMaxPages } from '@/store/pagination';
import { FIRST_PAGE } from '@/constants';

function* getRepositoriesSagaWorker({
  payload,
}: ReturnType<typeof getRepositories>) {
  try {
    const result: SuccessGetRepositoriesPayload = yield call(
      getFromAPI,
      '/search/repositories',
      payload,
    );
    yield put(successGetRepositories(result));
    yield put(
      setMaxPages(Math.ceil(result.total_count / VITE_REPOSITORIES_PER_PAGE)),
    );
  } catch (error) {
    yield put(errorGetRepositories('Error in repositories request'));
    yield put(setMaxPages(1));
    yield put(setCurrentPage(FIRST_PAGE));
  }
}

export function* getRepositoriesSagaWatcher() {
  yield takeEvery(getRepositories.type, getRepositoriesSagaWorker);
}
