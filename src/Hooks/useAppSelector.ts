import { useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from '../Store/reducer/index';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;