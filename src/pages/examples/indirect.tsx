import Parent from "@/components/examples/direct/Parent";
import Panel from "@/components/examples/indirect/Panel";
import Page from "@/components/template/Page";

export default function DirectPage(){
    return(
        <Page>
            <Panel />
        </Page>
    )
}