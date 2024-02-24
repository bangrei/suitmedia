import { create } from "zustand";
import petJson from "./pets.js";
import productJson from "./products.js";
import brandJson from "./brands.js";
import knowledgeJson from "./knowledges.js";

interface MainState {
  loading: boolean;
  scrollUp: boolean;
  pets: any[];
  products: any[];
  brands: any[];
  knowledges: any[];
  setPets: (payload: any[]) => void;
  retrieveData: () => void;
}

export const useMainStore = create<MainState>((set, get) => ({
  loading: true,
  scrollUp: false,
  pets: [],
  products: [],
  brands: [],
  knowledges: [],
  setPets: (payload: any[]) => {
    set({ pets: payload });
  },
  setProducts: (payload: any[]) => {
    set({ products: payload });
  },
  retrieveData: async () => {
    set({ pets: petJson });
    set({ products: productJson });
    set({ brands: brandJson });
    set({ knowledges: knowledgeJson });
  },
}));
