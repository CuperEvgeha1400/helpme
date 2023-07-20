import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import {SelectorType, StoreType, TypeDispatch} from '../../store/index'
import { useSelector } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';

   export const AppSelector:TypedUseSelectorHook<SelectorType> = useSelector
   export const useAppDispatch = () => useDispatch<TypeDispatch>();
