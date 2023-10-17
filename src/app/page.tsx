import { Seo } from "@/ui/components/seo";
import { Buttons } from "@/ui/design-system/buttons/buttons";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import Typographie from "@/ui/design-system/typographie/typographie";
import { RiAncientGateFill, RiUser6Line } from "react-icons/ri";

export default function Home() {
  return (
    <div>
      <Seo title="Share Your Code" description="description" />
      <div className="flex items-center gap-4 p-10">
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </div>

      <div className="flex items-center gap-4 py-10">
        <Buttons size="small" variant="ico" icon={{ icon: RiUser6Line }} />

        <Buttons
          size="medium"
          iconTheme="gray"
          icon={{ icon: RiUser6Line }}
          // variant="ico"
          iconPosition="left"
        >
          Accent
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
