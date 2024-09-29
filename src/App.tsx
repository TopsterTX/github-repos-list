import { Layout, ListRepositories, SearchInput } from '@/components';
import { Pagination } from '@/components';
import { useGetRepositories } from '@/hooks';

function App() {
  useGetRepositories();

  return (
    <Layout>
      <SearchInput />
      <article className="flex-1">
        <ListRepositories />
      </article>
      <Pagination />
    </Layout>
  );
}

export default App;
