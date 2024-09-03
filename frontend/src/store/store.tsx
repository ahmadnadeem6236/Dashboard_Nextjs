import { create } from 'zustand'

// Define the types for `useLinkStore`
interface LinkStoreState {
    myVariable: string
}

interface LinkStoreActions {
    setMyVariable: (newValue: string) => void
}

type LinkStore = LinkStoreState & LinkStoreActions

const useLinkStore = create<LinkStore>((set) => ({
    myVariable: '',
    setMyVariable: (newValue) => set({ myVariable: newValue }),
}))

// Define types for `usePollStore`
interface Option {
    id: string
    votes: number
}

interface Poll {
    id: string
    options: Option[]
}

interface PollStoreState {
    polls: Poll[]
}

interface PollStoreActions {
    addPoll: (poll: Poll) => void
    vote: (pollId: string, optionId: string) => void
}

type PollStore = PollStoreState & PollStoreActions

const usePollStore = create<PollStore>((set) => ({
    polls: [],
    addPoll: (poll) => set((state) => ({ polls: [...state.polls, poll] })),
    vote: (pollId, optionId) =>
        set((state) => ({
            polls: state.polls.map((poll) =>
                poll.id === pollId
                    ? {
                          ...poll,
                          options: poll.options.map((option) =>
                              option.id === optionId
                                  ? { ...option, votes: option.votes + 1 }
                                  : option
                          ),
                      }
                    : poll
            ),
        })),
}))

// Define types for `useSpaceStore`
interface SpaceStoreState {
    space: number
}

interface SpaceStoreActions {
    incrementSpace: () => void
}

type SpaceStore = SpaceStoreState & SpaceStoreActions

const useSpaceStore = create<SpaceStore>((set) => ({
    space: 1,
    incrementSpace: () => set((state) => ({ space: state.space + 1 })),
}))

// Define the types for `useMsgStore`
interface LinkMsgStoreState {
    myMsg: string
}

interface LinkMsgStoreActions {
    setMyMsg: (newValue: string) => void
}

type MsgStore = LinkMsgStoreState & LinkMsgStoreActions

const useMsgStore = create<MsgStore>((set) => ({
    myMsg: '',
    setMyMsg: (newValue) => set({ myMsg: newValue }),
}))

export { useLinkStore, usePollStore, useSpaceStore, useMsgStore }
