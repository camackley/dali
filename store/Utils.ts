
import { ActionContext, ActionTree } from "vuex";

export interface IDevice {
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isMobileOrTablet: boolean;
}

export class UtilsState {
  public device?: IDevice;

  constructor() {
    this.device = {} as IDevice;
  }
}

export const state = () => (
  new UtilsState()
);

export const mutations = {
  setDeviceInfo(context: UtilsState, data: IDevice): void {
    context.device = data;
  },
};

export const actions: ActionTree<UtilsState, UtilsState> = {
  setDeviceInfo(context: ActionContext<UtilsState, any>, data: IDevice): void {
    context.commit("setDeviceInfo", data);
  },
};
