import Call from "../types/call";

export const getMockCalls = (): Call[] => {
  const calls: Call[] = [];
  calls.push({
    id: 1,
    creation_date: "2020/01/01",
    creator: {
      id: 1,
      name: "A"
    },
    title: "Reunião 1",
    transcriptions: [
      {
        id: 1,
        text: "Bom dia, amigos."
      },
      {
        id: 2,
        text: "Como vocês estão?"
      },
      {
        id: 3,
        text: "Boa tarde!"
      },
      {
        id: 4,
        text: "Até logo."
      },
    ]
  })
  calls.push({
    id: 2,
    creation_date: "2022/07/11",
    creator: {
      id: 2,
      name: "B"
    },
    title: "Chamada de emergência",
    transcriptions: [
      {
        id: 1,
        text: "Bom dia, amigos."
      },
      {
        id: 2,
        text: "Como vocês estão?"
      },
      {
        id: 3,
        text: "Boa tarde!"
      },
      {
        id: 4,
        text: "Até logo."
      },
    ]
  })
  return calls;
}