import Event from "@/components/examples/Event";
import Change from "@/components/examples/context/Change";
import Show from "@/components/examples/context/Show";
import Page from "@/components/template/Page";

export default function ContextPage(){
    return (
        <Page>
            <div className="flex flex-col gap-5 items-center">
                <Show/>
                <Change/>
            </div> 
        </Page>
    )
}