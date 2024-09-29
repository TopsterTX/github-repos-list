import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchError } from 'ofetch';
import {
  errorGetRepositories,
  getRepositories,
  successGetRepositories,
  SuccessGetRepositoriesPayload,
} from '@/store/repositories';
import { getFromAPI } from '@/api';
import { VITE_REPOSITORIES_PER_PAGE } from '@/config';
import { setMaxPages } from '@/store/pagination';

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
    if (error instanceof FetchError) {
      yield put(errorGetRepositories(error.data));
    }
  }
}

export function* getRepositoriesSagaWatcher() {
  yield takeEvery(getRepositories.type, getRepositoriesSagaWorker);
}
