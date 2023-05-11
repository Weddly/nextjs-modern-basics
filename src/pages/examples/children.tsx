import Box from "@/components/examples/children/Box";
import Grid from "@/components/examples/children/Grid";
import Page from "@/components/template/Page";

export default function ChildrenPage() {
    return (
        <div>
            <Page>
                <Grid>
                    <Box>#1</Box>
                    <Box>#2</Box>
                    <Box>#3</Box>
                    <Box>#4</Box>
                    <Box>#5</Box>
                    <Box>#6</Box>
                    <Box>#7</Box>
                    <Box>#8</Box>
                    <Box>
                        <span>#</span>
                        <span><b>9</b></span>
                    </Box>
                </Grid>
            </Page>
        </div>
    )
}