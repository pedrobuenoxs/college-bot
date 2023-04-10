import { create } from 'zustand';

/* Change this to your Pinecone index name. Index name can only contain lowercase letters, numbers, and hyphens. Cannot be more than 45 characters.*/
export const PINECONE_INDEX_NAME = 'college';

/* Change, remove, or add topics here. Any topics listed here will be selectable
 by users in the navigation bar. 
 - TOPIC is name of the topic that the user will see. 
 - NAMESPACE is used in three ways: 
    1) As the namespace name in your Pinecone index. 
    2) In the URL parameters to allow the user to switch topics. 
    3) As the name of the directory in the docs folder
   NAMESPACE MUST ONLY CONTAIN LOWER CASE LETTERS A-Z AND HYPHENS. USE OF ANY OTHER CHARACTERS WILL
   RESULT IN IMPROPER INGESTION AND/OR ERRORS WHEN CHANGING TOPICS. ADDITIONALLY THE DIRECTORY OF
   YOUR TOPIC IN `docs` MUST EXACTLY MATCH THE NAMESPACE. USE OF ANY OTHER NAMES WILL RESULTS IN 
   THE CHATBOT BEING UNABLE TO LOCATE THE DOCUMENTS FOR THE TOPIC.
 - PROMPT is the placeholder text that is shown in the text box for each topic. */
export const TOPICS = [
  {
    TOPIC: 'Cálculo 1',
    NAMESPACE: 'c1', // MUST ONLY CONTAIN LOWER CASE LETTERS A-Z AND HYPHENS
    PROMPT: 'Como definir o dominio de uma função?',
  },
  {
    TOPIC: 'Cálculo 2',
    NAMESPACE: 'c2', // MUST ONLY CONTAIN LOWER CASE LETTERS A-Z AND HYPHENS
    PROMPT: 'Como derivar uma funcão?',
  },
  {
    TOPIC: 'Cálculo 3',
    NAMESPACE: 'c3', // MUST ONLY CONTAIN LOWER CASE LETTERS A-Z AND HYPHENS
    PROMPT: 'Como integrar uma funcão?',
  },
  {
    TOPIC: 'Algebra Linear',
    NAMESPACE: 'algelin', // MUST ONLY CONTAIN LOWER CASE LETTERS A-Z AND HYPHENS
    PROMPT: 'Como resolver um sistema de equações lineares?',
  },
  {
    TOPIC: 'Series e equações diferenciais',
    NAMESPACE: 'series', // MUST ONLY CONTAIN LOWER CASE LETTERS A-Z AND HYPHENS
    PROMPT: 'Como resolver uma equação diferencial?',
  },
];

interface PineconeState {
  PINECONE_NAME_SPACE: { TOPIC: string; NAMESPACE: string; PROMPT?: string };
  PINECONE_INDEX_NAME: string;
  setPineconeNamespace: (namespace: {
    TOPIC: string;
    NAMESPACE: string;
    PROMPT?: string;
  }) => void;
}

export const usePineconeStore = create<PineconeState>((set) => ({
  PINECONE_NAME_SPACE: TOPICS[0],
  PINECONE_INDEX_NAME: PINECONE_INDEX_NAME,
  setPineconeNamespace: (namespace: {
    TOPIC: string;
    NAMESPACE: string;
    PROMPT?: string;
  }) => set({ PINECONE_NAME_SPACE: namespace }),
}));
