import { Seo } from "@/ui/components/seo";
import { Buttons } from "@/ui/design-system/buttons/buttons";
import Typographie from "@/ui/design-system/typographie/typographie";

export default function Home() {
  return (
    <div>
      <Seo title="Share Your Code" description="description" />
      <div className="flex items-center gap-4 py-10">
        <Buttons size="small" variant="secondary">
          Appuie
        </Buttons>
        <Buttons size="large" variant="outline">
          Appuie
        </Buttons>
        <Buttons variant="accent">Appuie</Buttons>
        <Buttons variant="disabled">Appuie</Buttons>
        {/* <Typographie variant="display"  weight="regular" component="div">
        hello world
      </Typographie> */}
      </div>
    </div>
  );
}
