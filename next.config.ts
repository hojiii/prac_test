/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true, // 개발 시 컴포넌트 이름 표시
      ssr: true, // 서버사이드 렌더링 지원
      minify: true, // 코드 최적화
    },
  },
  images: {
    domains: ["thumbnail.laftel.net"],
  },
};

export default nextConfig;
