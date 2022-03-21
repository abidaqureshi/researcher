import { researcherActions } from '../actions/researcherActions';

const initialState = {
  researchers: [],
  filterRecords: [],
  searchString: ''
};

export const researcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case researcherActions.GET_ALL_RESEARCHER: {
      return {
        researchers: [...state.researchers]
      };
    }
    case researcherActions.CREATE_RESEARCHER: {
      return {
        researchers: [...state.researchers, action.data.researcher]
      };
    }
    case researcherActions.UPDATE_RESEARCHER: {
      const { researcher } = action.data;
      const researchersList = state.researchers;
      const recordId = researchersList.findIndex((item) => item.id === researcher.id);
      researchersList[recordId] = researcher;

      return {
        researchers: [...researchersList],
        filterRecords: [...researchersList],
        searchString: state.searchString
      };
    }
    case researcherActions.DELETE_RESEARCHER: {
      const { id } = action.data;
      let researchersList = state.researchers;
      researchersList = researchersList.filter((item) => item.id !== id);
      return {
        researchers: [...researchersList],
        filterRecords: [...researchersList],
        searchString: state.searchString
      };
    }

    case researcherActions.FILTER_RESEARCHER: {
      const { searchString } = action.data;

      if (!searchString.trim()) {
        return {
          researchers: [...state.researchers],
          filters: [],
          searchString: ''
        };
      }

      let researchersList = state.researchers;
      researchersList = researchersList.filter(
        (item) =>
          item.name.includes(searchString) ||
          item.background.includes(searchString) ||
          item.email.includes(searchString)
      );
      return {
        researchers: [...state.researchers],
        filterRecords: [...researchersList],
        searchString
      };
    }

    default:
      return state;
  }
};
