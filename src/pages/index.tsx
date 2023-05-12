import Row from "@/components/layout/Row"
import Menu from "@/components/template/Menu"
import MenuItem from "@/components/template/MenuItem"
import Page from "@/components/template/Page"
import { IconArrowMoveDown, IconArrowMoveUp, IconArrowsDiff, IconClick, IconClock, IconComponents, IconDatabase, IconNumber, IconNumbers, IconSitemap, IconSourceCode, IconTable } from "@tabler/icons-react"

export default function Home() {
  return (
    <Page>
      <Menu>
        <Row>
          <MenuItem url="/time.html" icon={<IconSourceCode/>}
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Time with JS (Static)
          </MenuItem>
          <MenuItem url="/api/time" icon={<IconClock />}
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Time (Dynamic)
          </MenuItem>
          <MenuItem url="/api/table?rows=5&columns=7" icon={<IconTable />}
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Table (Dynamic)
          </MenuItem>
          <MenuItem url="/api/users" icon={<IconArrowsDiff />}
            className="bg-gradient-to-r from-red-500 to-yellow-500">
            Users API
          </MenuItem>
        </Row>
        <Row>
          <MenuItem url="/examples/basic" icon={<IconComponents />}
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Basic Component
          </MenuItem>
          <MenuItem url="/examples/children" icon={<IconSitemap />}
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Children Component
          </MenuItem>
          <MenuItem url="/examples/event" icon={<IconClick />}
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Event Component
          </MenuItem>
          <MenuItem url="/examples/direct" icon={<IconArrowMoveDown />}
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Direct Communication
          </MenuItem>
          <MenuItem url="/examples/indirect" icon={<IconArrowMoveUp />}
            className="bg-gradient-to-r from-cyan-500 to-red-500">
            Indirect Communication
          </MenuItem>
        </Row>
        <Row>
          <MenuItem url="/examples/state" icon={<IconNumbers />}
            className="bg-gradient-to-r from-blue-400 to-purple-500">
            Using State
          </MenuItem>
        </Row> 
      </Menu>
    </Page>
  )
}
