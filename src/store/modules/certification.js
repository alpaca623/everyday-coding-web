/**
 * 인증 처리에 대한 스토어이다.
 * 인증 처리의 모든 내용은 요기에서 중앙집중화(?) 되어 처리되도록 한다.
 *
 * 필요한 액션 내용들
 * 1. 인증 목록
 * 2. 인증 입력
 * 3. 인증 수정(준비중)
 * 4. 인증 삭제(준비중)
 */

import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";
import { certificationListApi } from "../../api";

/**
 * 초기 데이터를 불러오는 로직이 구성되어야 하는데,
 * 구성하기에 어려움이 좀 있다.
 * 
 * 1. action은 말 그대로 '행동'이라 어떤 이벤트가 일어날 때 호출되는 것이라고 생각이 듬
 * 2. 현재 저장되어있는 데이터를 불러오는 로직은.. 어디서 구현되어야 하지.. <- 이게 문제
 * 3. store 한곳에서 데이터를 처리하는 방식이라 후에 로그인이나 세션처리도 여기서 해야되나?
 * 
 * 흠.. 천천히 해봐야겠다 당장은 안되는게 아쉽다..
 */
// Action 정의
const CHANGE_INPUT = "certification/CHANGE_INPUT";
const REQUEST_LIST = "certification/REQUEST_LIST";
const INSERT = "certification/INSERT";

export const requestList = createAction(REQUEST_LIST);

const initialState = Map({
  loading: true,
  input: "",
  certificationList: List()
});

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => state.set("input", action.payload)
  },
  initialState
);
