import Form from "@/components/examples/state/Form";
import Minimum from "@/components/examples/state/Minimum";
import Page from "@/components/template/Page";

export default function StatePage(){
    return (
      <Page>
        <div className="flex flex-col items-center gap-10">
            <Minimum />
            <Form />
        </div> 
      </Page>
    );
}