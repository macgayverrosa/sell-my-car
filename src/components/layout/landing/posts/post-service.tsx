"use client";

import { PostProps } from "./data";
import PostGallery from "./post-gallery";
import PostServiceDetails from "./post-service-details";
import { MaxWidthWrapper } from "@/components/shared/wrappers/max-width-wrapper";

export default function PostService({ post }: { post: PostProps }) {

  return (
    <section className="pt-10 pb-20 bg-background">
      <MaxWidthWrapper>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <PostGallery post={post} />
            <PostServiceDetails post={post} />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
