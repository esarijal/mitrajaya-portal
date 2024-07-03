import { Button } from "../ui/button";

function ShowMoreButton({
  pageSize,
  setPageSize,
  totalPage,
}: {
  pageSize: number;
  setPageSize: (value: number) => void;
  totalPage: number;
}) {
  const handleAddPageSize = () => {
    setPageSize(pageSize + 5);
  };

  //   return totalPage > 1 ? (
  //     <Button
  //       onClick={handleAddPageSize}
  //       className="w-full md:w-fit"
  //       variant={"outline"}
  //     >
  //       Tampilkan Berita Lainnya
  //     </Button>
  //   ) : (
  //     <Button
  //       onClick={() => setPageSize(5)}
  //       className="w-full md:w-fit"
  //       variant={"outline"}
  //     >
  //       Tampilkan Lebih Sedikit
  //     </Button>
  //   );

  return (
    <>
      {totalPage > 1 && (
        <Button
          onClick={handleAddPageSize}
          className="w-full md:w-fit"
          variant={"outline"}
        >
          Tampilkan Berita Lainnya
        </Button>
      )}

      {pageSize > 5 && (
        <Button
          onClick={() => setPageSize(5)}
          className="w-full md:w-fit"
          variant={"outline"}
        >
          Tampilkan Lebih Sedikit
        </Button>
      )}
    </>
  );
}

export default ShowMoreButton;
