export const SITE = {
  website: "https://imwzj.uk/", // replace this with your deployed domain
  author: "王小明",
  profile: "https://imwzj.uk/",
  desc: "乱七八糟就像我一样",
  title: "王小明的杂物堆",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: false,
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
