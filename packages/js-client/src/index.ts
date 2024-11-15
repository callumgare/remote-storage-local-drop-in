export { RemoteStorage, RemoteStorageLocalDropIn } from './core/remote-storage'
export * from './core/constants'

import { RemoteStorage, RemoteStorageLocalDropIn } from './core/remote-storage'

globalThis.RemoteStorage = RemoteStorage
globalThis.RemoteStorageLocalDropIn = RemoteStorageLocalDropIn
