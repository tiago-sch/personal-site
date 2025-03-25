import StoreList from "../../src/components/Store/List";

const Store = async () => {
  const fetched = await fetch(process.env.NEXT_APP_LOJINHA_URL, { next: { revalidate: 3600 } });
  const data = await fetched.json();

  const items = data?.values?.map(item => ({
    name: item[0],
    slug: item[1],
    value: item[3],
    description: item[2],
    pic: item[4],
    sold: item[5] === "TRUE"
  }));

  return (
    <div className="container">
      <h1 className="h1 text-center">Lojinha do Tiago</h1>
      <p className="text-center">Interessou? Entra em contato pelo zap ou insta</p>
      <StoreList items={items} />
    </div>
  );
}

export default Store;
