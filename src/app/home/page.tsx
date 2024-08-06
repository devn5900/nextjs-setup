import { Metadata, ResolvingMetadata } from 'next'
// import { getSeoMeta } from "@/utills/seo";
// import { Metadata } from "next";
// export const metadata: Metadata = getSeoMeta();
const HomePage = () => {
  return <div></div>
}
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// generate dynamic meta data for seo
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  // const { data: seoData } = await ApiService.get('seo')
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: 'title',
    openGraph: {
      images: [...previousImages],
    },
  }
}
export default HomePage
