const ENV_SITE_URL = (
  import.meta.env.VITE_SITE_URL as string | undefined
)?.trim();

const normalizedSiteUrl = (
  ENV_SITE_URL && ENV_SITE_URL.length > 0
    ? ENV_SITE_URL
    : "https://www.resetyourbody.com"
).replace(/\/$/, "");

const DEFAULT_SOCIAL_IMAGE_PATH =
  (import.meta.env.VITE_SOCIAL_IMAGE as string | undefined) ??
  "/og_image_ap.png";
const DEFAULT_TWITTER_HANDLE =
  (import.meta.env.VITE_TWITTER_HANDLE as string | undefined) ??
  "@ResetYourBody";
const DEFAULT_LOCALE =
  (import.meta.env.VITE_SITE_LOCALE as string | undefined) ?? "it_IT";

const HTML_TAG_REGEX = /<[^>]*>/g;

const ITALIAN_MONTHS: Record<string, string> = {
  gennaio: "01",
  febbraio: "02",
  marzo: "03",
  aprile: "04",
  maggio: "05",
  giugno: "06",
  luglio: "07",
  agosto: "08",
  settembre: "09",
  ottobre: "10",
  novembre: "11",
  dicembre: "12",
};

export const buildAbsoluteUrl = (path = ""): string => {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (!path) {
    return normalizedSiteUrl;
  }

  const sanitizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedSiteUrl}${sanitizedPath}`;
};

export const siteMetadata = {
  siteUrl: normalizedSiteUrl,
  siteName: "Reset Your Body",
  defaultTitle: "Reset Your Body | Massoterapia & Chinesiologia",
  defaultDescription:
    "Programmi di massoterapia e chinesiologia personalizzati con Alessandro Paradiso per ritrovare equilibrio, movimento e benessere quotidiano.",
  defaultSocialImage: buildAbsoluteUrl(DEFAULT_SOCIAL_IMAGE_PATH),
  twitterHandle: DEFAULT_TWITTER_HANDLE,
  locale: DEFAULT_LOCALE,
  organization: {
    name: "Reset Your Body",
    legalName: "Reset Your Body - Alessandro Paradiso",
    logo: buildAbsoluteUrl("/ryb.png"),
  },
  founder: "Alessandro Paradiso",
};

export const buildMetaDescription = (
  input: string | undefined,
  maxLength = 155
): string => {
  if (!input) {
    return siteMetadata.defaultDescription;
  }

  const withoutTags = input.replace(HTML_TAG_REGEX, " ");
  const collapsed = withoutTags.replace(/\s+/g, " ").trim();

  if (!collapsed) {
    return siteMetadata.defaultDescription;
  }

  if (collapsed.length <= maxLength) {
    return collapsed;
  }

  return `${collapsed.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`;
};

export const parseItalianDateToIso = (
  input: string | undefined
): string | undefined => {
  if (!input) {
    return undefined;
  }

  const match = input.match(/(\d{1,2})\s+([A-Za-z\u00C0-\u017F]+)\s+(\d{4})/);

  if (match) {
    const day = match[1].padStart(2, "0");
    const rawMonth = match[2]
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const month = ITALIAN_MONTHS[rawMonth] ?? undefined;
    const year = match[3];

    if (month) {
      return `${year}-${month}-${day}`;
    }
  }

  const parsedDate = new Date(input);

  if (!Number.isNaN(parsedDate.valueOf())) {
    return parsedDate.toISOString();
  }

  return undefined;
};

export const toJsonLd = (data: unknown): string =>
  JSON.stringify(data, null, 2);
