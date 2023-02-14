import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import Axios from "../../../Axios";
import { missionType } from "../../../types/types";
import { Action } from "@remix-run/router";
import { strictEqual } from "assert";

// Define a type for the slice state

// interface DroneStats={[]}

interface MissionInterface {
  _id: String | null;
  featureCollection: { type: string; features: object[] } | null;
  name?: string | null;
  time: {
    mode: string;
    start: string | null;
    end: string | null;
    repeate: {
      interval: number;
      byday: string[];
      freq: string;
      count: number | null;
      until: string | null;
    } | null;
  } | null;

  settings: {
    automatic: boolean;
    hatch_angle?: string;
    formation_type?: string;
    number_of_drones?: number;
  } | null;
  status: string | null;
  missionType: string | null;
  createdBy: string | null;
  createdOn: string | null;
  __v: number | null;
}
interface TriggerInterface {
  hideSideNav: boolean;
  hideMainNav: boolean;
  hideAdvanceSettings: boolean;
  hideSearchMenu: boolean;
  loading: boolean;
  nonEditable: boolean;
}

interface MissionCreateStatus {
  current: number;
  options: string[];
}

interface CounterState {
  triggers: TriggerInterface;
  missionCreate: MissionInterface;
  missionCreateStatus: MissionCreateStatus | null;
  droneStats: any[] | null;
}

// Define the initial state using that type
const initialState: CounterState = {
  triggers: {
    hideSideNav: false,
    hideMainNav: true,
    hideAdvanceSettings: false,
    hideSearchMenu: false,
    loading: false,
    nonEditable: false,
  },
  missionCreate: {
    _id: null,
    featureCollection: null,
    name: null,
    settings: null,
    time: null,
    status: null,
    missionType: null,
    createdBy: null,
    createdOn: null,
    __v: null,
  },
  missionCreateStatus: null,
  droneStats: null,
};

// const bookMission = createAsyncThunk(
//   "missions/bookMission",
//   async (state: CounterState) => {
//     const data = await Axios.post(
//       `/mission/book${state.missionCreate.missionType}mission`,
//       state.missionCreate
//     );
//     return data;
//     // alert("book kar ne....!!");
//   }
// );

// const extraActions = createExtraActions();
// const extraReducers = createExtraReducers();
export const counterSlice = createSlice({
  name: "triggers",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setHideSideNav: (state, action: PayloadAction<boolean>) => {
      state.triggers.hideSideNav = action.payload;
    },
    setHideMainNav: (state, action: PayloadAction<boolean>) => {
      state.triggers.hideMainNav = action.payload;
    },
    setHideAdvanceSettings: (state, action: PayloadAction<boolean>) => {
      state.triggers.hideAdvanceSettings = action.payload;
    },
    setMissionType: (state, action: PayloadAction<string>) => {
      state.missionCreate = {
        ...state.missionCreate,
        missionType: action.payload,
      };
    },
    setMissionName: (state, action: PayloadAction<string>) => {
      state.missionCreate = { ...state.missionCreate, name: action.payload };
    },
    setMissionFeatureCollection: (
      state,
      action: PayloadAction<{ type: string; features: object[] }>
    ) => {
      state.missionCreate = {
        ...state.missionCreate,
        featureCollection: action.payload,
      };
    },
    setMissionTime: (state, action: PayloadAction<any>) => {
      // if (state.missionCreate.time)
      state.missionCreate.time = action.payload;
    },
    setMissionTimeMode: (state, action: PayloadAction<string>) => {
      if (state.missionCreate.time)
        state.missionCreate.time.mode = action.payload;
    },
    setMissionTimeStart: (state, action: PayloadAction<string | null>) => {
      if (state.missionCreate.time)
        state.missionCreate.time.start = action.payload;
    },
    setMissionTimeEnd: (state, action: PayloadAction<string | null>) => {
      if (state.missionCreate.time)
        state.missionCreate.time.end = action.payload;
    },
    setMissionTimeRepeate: (
      state,
      action: PayloadAction<{
        interval: number;
        byday: string[];
        freq: string;
        count: number | null;
        until: string | null;
      } | null>
    ) => {
      if (state.missionCreate.time)
        state.missionCreate.time.repeate = action.payload;
    },
    setMissionTimeRepeateInterval: (state, action: PayloadAction<number>) => {
      if (state.missionCreate.time)
        if (state.missionCreate.time.repeate)
          state.missionCreate.time.repeate.interval = action.payload;
    },
    setMissionTimeRepeateFreq: (state, action: PayloadAction<string>) => {
      if (state.missionCreate.time)
        if (state.missionCreate.time.repeate)
          state.missionCreate.time.repeate.freq = action.payload;
    },

    appendMissionTimeRepeateByDay: (state, action: PayloadAction<string>) => {
      if (state.missionCreate.time)
        if (state.missionCreate.time.repeate)
          state.missionCreate.time.repeate.byday = [
            ...state.missionCreate.time.repeate.byday,
            action.payload,
          ];
    },
    deccendMissionTimeRepeateByDay: (state, action: PayloadAction<string>) => {
      // if (state.missionCreate.time.repeate) alert("decending");
      if (state.missionCreate.time)
        if (state.missionCreate.time.repeate)
          state.missionCreate.time.repeate.byday =
            state.missionCreate.time.repeate?.byday.filter(
              (item) => item !== action.payload
            );
    },

    setMissionTimeRepeateUntil: (
      state,
      action: PayloadAction<string | null>
    ) => {
      // if (state.missionCreate.time.repeate) alert("decending");
      if (state.missionCreate.time)
        if (state.missionCreate.time.repeate)
          state.missionCreate.time.repeate.until = action.payload;
    },
    setMissionTimeRepeateCount: (
      state,
      action: PayloadAction<number | null>
    ) => {
      // if (state.missionCreate.time.repeate) alert("decending");
      if (state.missionCreate.time)
        if (state.missionCreate.time.repeate)
          state.missionCreate.time.repeate.count = action.payload;
    },
    setMissionSettings: (
      state,
      action: PayloadAction<{
        automatic: boolean;
        hatch_angle: string;
        formation_type: string;
        number_of_drones: number;
      } | null>
    ) => {
      state.missionCreate.settings = action.payload;
    },
    setMissionSettingsAutomatic: (state, action: PayloadAction<boolean>) => {
      if (state.missionCreate.settings)
        state.missionCreate.settings.automatic = action.payload;
    },
    setMissionSettingsNumberOfDrones: (
      state,
      action: PayloadAction<number>
    ) => {
      if (state.missionCreate.settings)
        state.missionCreate.settings.number_of_drones = action.payload;
    },
    setMissionSettingsFormation: (state, action: PayloadAction<string>) => {
      if (state.missionCreate.settings)
        state.missionCreate.settings.formation_type = action.payload;
    },
    setMissionSettingsHatchAngle: (state, action: PayloadAction<string>) => {
      if (state.missionCreate.settings)
        state.missionCreate.settings.hatch_angle = action.payload;
    },
    resetMission: (state) => {
      state.missionCreate = initialState.missionCreate;
    },
    setMission: (state, action: PayloadAction<MissionInterface>) => {
      state.missionCreate = action.payload;
    },
    DraftMission: (state) => {
      const bookmissionFunction = async () => {
        const resp = Axios.post(`/mission/draftMission`, state.missionCreate);
        alert("draft kar ne....!!");
      };
      bookmissionFunction();
    },
    resetDroneState: (state) => {
      state.droneStats = initialState.droneStats;
    },
    updateDroneState: (state, action: PayloadAction<any>) => {
      // console.log(action.payload);
      const droneId = action.payload.socketstring.split("_")[1];
      // console.log(state.droneStats?.length);
      if (state.droneStats && state.droneStats.length > 0) {
        const filteredData = state.droneStats.filter(
          (stat: any) => stat.droneId !== droneId
        );
        const previousdata = state.droneStats.filter(
          (stat: any) => stat.droneId === droneId
        );
        if (previousdata.length > 0) {
          state.droneStats = [
            ...filteredData,
            { ...previousdata[0], droneId, ...action.payload.message },
          ];
        } else {
          state.droneStats = [
            ...filteredData,
            { droneId, ...action.payload.message },
          ];
        }
      } else {
        state.droneStats = [{ droneId, ...action.payload.message }];
      }
    },
    SetMissionStatus: (
      state,
      action: PayloadAction<MissionCreateStatus | null>
    ) => {
      state.missionCreateStatus = action.payload;
    },
    setNonEditable: (state, action: PayloadAction<boolean>) => {
      state.triggers.nonEditable = action.payload;
    },
    SetSearchMenu: (state, action: PayloadAction<boolean>) => {
      state.triggers.hideSearchMenu = action.payload;
    },
    SetLoading: (state, action: PayloadAction<boolean>) => {
      state.triggers.loading = action.payload;
    },
  },
});

export const {
  updateDroneState,
  setHideSideNav,
  setHideMainNav,
  setHideAdvanceSettings,
  setMissionType,
  setMissionName,
  setMissionFeatureCollection,
  setMissionTime,
  setMissionTimeMode,
  setMissionTimeStart,
  setMissionTimeEnd,
  setMissionTimeRepeate,
  setMissionTimeRepeateInterval,
  setMissionTimeRepeateFreq,
  appendMissionTimeRepeateByDay,
  deccendMissionTimeRepeateByDay,
  setMissionTimeRepeateUntil,
  setMissionTimeRepeateCount,
  setMissionSettings,
  setMissionSettingsAutomatic,
  setMissionSettingsNumberOfDrones,
  setMissionSettingsFormation,
  setMissionSettingsHatchAngle,
  resetMission,
  setMission,
  DraftMission,
  SetSearchMenu,
  SetLoading,
  setNonEditable,
  SetMissionStatus,
  resetDroneState,
} = counterSlice.actions;

// export const BookMission = bookMission;

// Other code such as selectors can use the imported `RootState` type
export const getAuthDetails = (state: RootState) => state.app;

export default counterSlice.reducer;
