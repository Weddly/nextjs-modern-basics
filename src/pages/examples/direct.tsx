import Parent from "@/components/examples/direct/Parent";
import Page from "@/components/template/Page";

export default function DirectPage(){
    return(
        <Page>
            <Parent name="José" surname="Silva" />
        </Page>
    )
}