import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  UPDATE_CLICKS,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_FIVESTARS,
  UPDATE_FOURSTARS,
  UPDATE_THREESTARS,
  UPDATE_TWOSTARS,
  UPDATE_ONESTARS
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};
  
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
      case UPDATE_CLICKS:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, clicks: payload.clicks } : post
        ),
        loading: false
      };

    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            comment => comment._id !== payload
          )
        },
        loading: false
      };
      case UPDATE_FIVESTARS:
        return {
          ...state,
          posts: state.posts.map(post =>
            post._id === payload.id ? { ...post, five_stars: payload.five_stars } : post
          ),
          loading: false
        };
        case UPDATE_FOURSTARS:
        return {
          ...state,
          posts: state.posts.map(post =>
            post._id === payload.id ? { ...post, four_stars: payload.four_stars } : post
          ),
          loading: false
        };
        case UPDATE_THREESTARS:
        return {
          ...state,
          posts: state.posts.map(post =>
            post._id === payload.id ? { ...post, three_stars: payload.three_stars } : post
          ),
          loading: false
        };
        case UPDATE_TWOSTARS:
          return {
            ...state,
            posts: state.posts.map(post =>
              post._id === payload.id ? { ...post, two_stars: payload.two_stars } : post
            ),
            loading: false
          };
          case UPDATE_ONESTARS:
          return {
            ...state,
            posts: state.posts.map(post =>
              post._id === payload.id ? { ...post, one_stars: payload.one_stars } : post
            ),
            loading: false
          };
    default:
      return state;
  }
}
