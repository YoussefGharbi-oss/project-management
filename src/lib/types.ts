type Inputs = {
  username: string
  password: string
}
interface Project {
  projectId: string
  projectName: string
  startedAt: string
  finishedAt: string
  team: Team
}
interface Team {
  name: string
}
export type { Inputs, Project, Team }
