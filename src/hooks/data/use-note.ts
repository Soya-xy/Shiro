import { useQuery } from '@tanstack/react-query'

import { useNoteId } from '~/providers/note/note-id-provider'
import { queries } from '~/queries/definition'

export const useNoteData = () => {
  const nid = useNoteNId()
  const { data: noteAggregation } = useQuery({
    ...queries.note.byNid(nid || ''),
    enabled: nid !== undefined,
    select(data) {
      return data.data
    },
    keepPreviousData: true,
  })

  return noteAggregation
}

export const useNoteNId = () => {
  return useNoteId()
}

export const useNoteByNidQuery = (nid: string) => {
  return useQuery(queries.note.byNid(nid))
}
