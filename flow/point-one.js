/**@flow*/
import type {
  Store,
  PointReducer,
  StoreExtender,
  StoreInitializer,
  HandlerThunkAction,
  DispatchExtender,
  DispatcherAPI,
  DispatchPlugin
} from './types'

declare module 'point-one' {
  declare function createStore(reducer: PointReducer, initialState: ?any|StoreExtender, extenders: ?StoreExtender): Store;

  declare function createMemoizeAction(handler: Function): HandlerThunkAction;
  declare function createPositiveAction(handler: Function, onCall: string, onFail: string): HandlerThunkAction;
  declare function createPromiseAction(handler: Function, onSuccess: string, onFail: ?string): HandlerThunkAction;

  declare function concatEventReducers(reducers: {[key: string]: PointReducer}, initialState: ?any): PointReducer;
  declare function concatReducers(reducers: {[key: string]: PointReducer}): PointReducer;
  declare function reduxConverter(next: StoreInitializer): StoreInitializer;
  declare function restoreListen(next: StoreInitializer): StoreInitializer;

  declare function devTools(name: string): DispatchExtender;
  declare function localStorageCache(name: string, fields: Array<string>): StoreExtender;
  declare function thunk(api: DispatcherAPI): DispatchPlugin;

  declare function arrayRemove(state: Array<any>, index: number): Array<any>;
  declare function arrayReplace(state: Array<any>, index: number, newItem: Object): Array<any>;
  declare function arrayPlace(state: Array<any>, item: Object, after: number): Array<any>;
  declare function arrayAppend(state: Array<any>, item: Object): Array<any>;
  declare function arrayPrepend(state: Array<any>, item: Object): Array<any>;
  declare function compose(...funcs: Array<Function>): Function;
  declare function listen(store: ?Store|Function, stateGetter: ?Function): ReactClass;
  declare function bindActions(actions: {[key: string]: Function}): ReactClass;
  declare function makeFieldsGetter(fields: Array<string>): Function;
  declare function observeChange(fields: Array<string>): ReactClass;
  declare function useDispatchers(...dispatchers: Array<DispatchExtender>): StoreExtender;
}