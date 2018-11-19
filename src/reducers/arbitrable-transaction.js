import PropTypes from 'prop-types'
import createReducer, { createResource } from 'lessdux'

// Common Shapes
export const _arbitrableTxShape = PropTypes.shape({
  address: PropTypes.string,
  arbitrator: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  disputeId: PropTypes.number,
  email: PropTypes.string,
  evidencePartyA: PropTypes.string,
  evidencePartyB: PropTypes.string,
  evidences: PropTypes.arrayOf(
    PropTypes.shape({ _id: PropTypes.string, url: PropTypes.string })
  ),
  partyB: PropTypes.string,
  timeout: PropTypes.number,
  _id: PropTypes.string
})
export const _arbitrableTxsShape = PropTypes.arrayOf(_arbitrableTxShape.isRequired)

export const _disputeShape = PropTypes.string
export const _appealShape = PropTypes.string
export const _payShape = PropTypes.string
export const _reimburseShape = PropTypes.string
export const _evidenceShape = PropTypes.string
export const _timeoutShape = PropTypes.string
export const _rulingShape = PropTypes.string
export const _arbitratorShape = PropTypes.string

// Shapes
const {
  shape: arbitrableTxsShape,
  initialState: arbitrableTxsInitialState
} = createResource(_arbitrableTxShape)
const { shape: arbitrableTxShape, initialState: arbitrableTxInitialState } = createResource(
    _arbitrableTxShape,
  { withCreate: true }
)
const { shape: disputeShape, initialState: disputeInitialState } = createResource(
  _disputeShape,
  { withCreate: true }
)
const { shape: appealShape, initialState: appealInitialState } = createResource(
  _appealShape,
  { withCreate: true }
)
const { shape: payShape, initialState: payInitialState } = createResource(
  _payShape,
  { withCreate: true }
)
const { shape: reimburseShape, initialState: reimburseInitialState } = createResource(
  _reimburseShape,
  { withCreate: true }
)
const { shape: evidenceShape, initialState: evidenceInitialState } = createResource(
  _evidenceShape,
  { withCreate: true }
)
const { shape: timeoutShape, initialState: timeoutInitialState } = createResource(
  _timeoutShape,
  { withCreate: true }
)
const { shape: rulingShape, initialState: rulingInitialState } = createResource(
  _rulingShape
)
const { shape: arbitratorShape, initialState: arbitratorInitialState } = createResource(
  _arbitratorShape
)
export { arbitrableTxsShape, arbitrableTxShape }

// Reducer
export default createReducer({
  contracts: arbitrableTxsInitialState,
  arbitrableTx: arbitrableTxInitialState,
  dispute: disputeInitialState,
  appeal: appealInitialState,
  pay: payInitialState,
  reimburse: reimburseInitialState,
  evidence: evidenceInitialState,
  timeout: timeoutInitialState,
  arbitrator: arbitratorInitialState
})

// Selectors
export const getArbitrableTxs = state => state.arbitrableTx.arbitrableTxs.data