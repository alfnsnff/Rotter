import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-24">
      <div className="flex flex-col items-center justify-between space-y-2">
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Sova</h1>
          </Link>
        </div>
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Brimstone</h1>
          </Link>
        </div>
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Viper</h1>
          </Link>
        </div>
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Killjoy</h1>
          </Link>
        </div>
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Harbor</h1>
          </Link>
        </div>
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Cypher</h1>
          </Link>
        </div>
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Yoru</h1>
          </Link>
        </div>
        <div className="flex w-full border-gray-300 backdrop-blur-2xl rounded border bg-muted p-2 hover:bg-muted-foreground/10">
          <Link href={"#"}>
            <h1 className="text-sm text-muted-foreground">Fade</h1>
          </Link>
        </div>
      </div>
    </main>
  );
}
