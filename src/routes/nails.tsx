import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { buildHead, nailsPage } from "@/data/services";

export const Route = createFileRoute("/nails")({
  head: () => buildHead(nailsPage),
  component: NailsPage,
});

function NailsPage() {
  return <ServicePage page={nailsPage} />;
}
