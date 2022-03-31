import {
	GET_SHOP,
	SHOP_ERROR,
	CLEAR_SHOP,
	UPDATE_SHOP,
	GET_SHOPS,
	UPDATE_FOLLOWERS, 
} from '../actions/types';
  
const initialState = {
	shop: null,
	shops: [],
	loading: true,
	error: {}
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_SHOP:
		case UPDATE_SHOP:
			return {
				...state,
				shop: payload,
				loading: false
			};
		 
		case GET_SHOPS:
			return {
				...state,
				shops: payload,
				loading: false
			};
		case SHOP_ERROR:
			return {
				...state,
				error: payload,
				loading: false,
				shop: null
			};
		case CLEAR_SHOP:
			return {
				...state,
				shop: null,
				loading: false
			};

			case UPDATE_FOLLOWERS:
				return {
				  ...state,
				  shops: state.shops.map(shop =>
					shop._id === payload.id ? { ...shop, followers: payload.one_stars } : shop
				  ),
				  loading: false
				};

		default:
			return state;
	}
}
