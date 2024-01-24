export const ProjectCard = ({
  projectId,
  projectName,
  teamName,
  startedAt,
  finishedAt,
}) => {
  return (
    <div
      key={projectId}
      className="bg-white p-7 rounded-lg flex flex-col gap-2   shadow-md"
    >
      <p className="text-xs text-gray-500">{projectId}</p>

      <h2 className="text-2xl text-blue-500">{projectName}</h2>
      <progress max="100" value="80"></progress>
      <p className="text-green-500">{teamName}</p>

      <div className="flex gap-2">
        <p className="text-green-500">{startedAt}</p>
        <p className="text-red-500">{finishedAt}</p>
      </div>
    </div>
  )
}
