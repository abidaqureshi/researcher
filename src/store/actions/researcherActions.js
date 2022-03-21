export const researcherActions = {
  CREATE_RESEARCHER: 'RESEARCHER/CREATE',
  UPDATE_RESEARCHER: 'RESEARCHER/UPDATE',
  DELETE_RESEARCHER: 'RESEARCHER/DELETE',
  ALL_RESEARCHER: 'RESEARCHER/ALL',
  RESEARCHER_DETAIL: 'RESEARCHER/DETAIL',
  FILTER_RESEARCHER: 'RESEARCHER/FILTER'
};

export const createResearcher = (args = {}) => {
  return {
    type: researcherActions.CREATE_RESEARCHER,
    data: { ...args }
  };
};

export const updateResearcher = (args = {}) => {
  return {
    type: researcherActions.UPDATE_RESEARCHER,
    data: { ...args }
  };
};

export const deleteResearcher = (args = {}) => {
  return {
    type: researcherActions.DELETE_RESEARCHER,
    data: { ...args }
  };
};

export const getAllResearcher = (args = {}) => {
  return {
    type: researcherActions.GET_ALL_RESEARCHER
  };
};

export const filterResearcher = (args = {}) => {
  return {
    type: researcherActions.FILTER_RESEARCHER,
    data: { ...args }
  };
};
