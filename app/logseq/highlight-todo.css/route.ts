import { Color } from "@/lib/color";

const css = (color: string) => `
span[data-ref="TODO"] div a {
  color: ${color};
}

a.marker-switch.TODO {
  color: ${color};
}
`;

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const color = searchParams.get("color") ?? Color.Red;
  return new Response(css(color));
}
