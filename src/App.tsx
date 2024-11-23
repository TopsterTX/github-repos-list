import { FilterBlock, Layout, ListRepositories, Header } from '@/components';
import { Pagination } from '@/components';
import { useGetRepositories } from '@/hooks';

function App() {
  useGetRepositories();

  return (
    <Layout>
      <Header />
      <FilterBlock />
      <article className="flex-1">
        <ListRepositories />
      </article>
      <Pagination />
    </Layout>
  );
}

export default App;
