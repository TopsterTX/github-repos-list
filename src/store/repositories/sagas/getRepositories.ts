import { call, put, takeEvery } from 'redux-saga/effects';
import {
  errorGetRepositories,
  getRepositories,
  successGetRepositories,
  SuccessGetRepositoriesPayload,
} from '@/store/repositories';
import { getFromAPI } from '@/api';
import { VITE_REPOSITORIES_PER_PAGE } from '@/config';
import { resetPages, setCurrentPage, setMaxPages } from '@/store/pagination';
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
    if (result.items.length) {
      yield put(successGetRepositories(result));
      yield put(
        setMaxPages(Math.ceil(result.total_count / VITE_REPOSITORIES_PER_PAGE)),
      );
    } else {
      yield put(
        errorGetRepositories('Репозиториев по данному запросу не найдено'),
      );
      yield put(resetPages());
    }
    if (result.items.length) {
      yield put(successGetRepositories(result));
      yield put(
        setMaxPages(Math.ceil(result.total_count / VITE_REPOSITORIES_PER_PAGE)),
      );
    } else {
      yield put(
        errorGetRepositories('Репозиториев по данному запросу не найдено'),
      );
      yield put(setMaxPages(FIRST_PAGE));
    }
  } catch (error) {
    yield put(
      errorGetRepositories(
        'При получении списка репозиториев произошла ошибка',
      ),
    );
    yield put(setMaxPages(FIRST_PAGE));
    yield put(setCurrentPage(FIRST_PAGE));
  }
}

export function* getRepositoriesSagaWatcher() {
  yield takeEvery(getRepositories.type, getRepositoriesSagaWorker);
}
