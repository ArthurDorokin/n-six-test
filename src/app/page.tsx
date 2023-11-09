import { WrapPage } from "@/features/page";
import { HomePageFeature } from "@/features/home/HomePageFeature";
import { Metadata } from "next";
import { customFetch } from "@/utils/function/customFetch";

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Home page description',
}

export default async function Home() {
    const movies = await customFetch('/titles', {
        method: 'GET',
        cache: 'force-cache'
    })

    return (
      <WrapPage>
        <HomePageFeature movies={movies.results} />
      </WrapPage>
  )
}