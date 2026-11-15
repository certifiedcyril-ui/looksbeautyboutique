import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { buildHead, hairPage } from "@/data/services";

export const Route = createFileRoute("/hair")({
  head: () => buildHead(hairPage),
  component: HairPage,
});

function HairPage() {
  return <ServicePage page={hairPage} />;
}
