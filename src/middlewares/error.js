import { CodeError } from '../lib/error/constants/code.js'
import { response } from '../utils/response.js'

export const isError = (err, req, res, next) => {
  req.logger.error(`${err.cause}: ${err.message}`)
  const responseStatus = response(CodeError.INTERNAL_SERVER_ERROR, null, { cause: err.cause, message: err.message })

  switch (err.code) {
    case CodeError.BAD_REQUEST: {
      responseStatus.status = CodeError.BAD_REQUEST
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.UNAUTHORIZED: {
      responseStatus.status = CodeError.UNAUTHORIZED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.PAYMENT_REQUIRED: {
      responseStatus.status = CodeError.PAYMENT_REQUIRED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.FORBIDDEN: {
      responseStatus.status = CodeError.FORBIDDEN
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.NOT_FOUND: {
      responseStatus.status = CodeError.NOT_FOUND
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.METHOD_NOT_ALLOWED: {
      responseStatus.status = CodeError.METHOD_NOT_ALLOWED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.NOT_ACCEPTABLE: {
      responseStatus.status = CodeError.NOT_ACCEPTABLE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.PROXY_AUTHENTICATION_REQUIRED: {
      responseStatus.status = CodeError.PROXY_AUTHENTICATION_REQUIRED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.REQUEST_TIMEOUT: {
      responseStatus.status = CodeError.REQUEST_TIMEOUT
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.CONFLICT: {
      responseStatus.status = CodeError.CONFLICT
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.GONE: {
      responseStatus.status = CodeError.GONE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.LENGTH_REQUIRED: {
      responseStatus.status = CodeError.LENGTH_REQUIRED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.PRECONDITION_FAILED: {
      responseStatus.status = CodeError.PRECONDITION_FAILED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.PAYLOAD_TOO_LARGE: {
      responseStatus.status = CodeError.PAYLOAD_TOO_LARGE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.URI_TOO_LONG: {
      responseStatus.status = CodeError.URI_TOO_LONG
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.UNSUPPORTED_MEDIA_TYPE: {
      responseStatus.status = CodeError.UNSUPPORTED_MEDIA_TYPE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.RANGE_NOT_SATISFIABLE: {
      responseStatus.status = CodeError.RANGE_NOT_SATISFIABLE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.EXPECTATION_FAILED: {
      responseStatus.status = CodeError.EXPECTATION_FAILED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.MISDIRECTED_REQUEST: {
      responseStatus.status = CodeError.MISDIRECTED_REQUEST
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.UNPROCESSABLE_ENTITY: {
      responseStatus.status = CodeError.UNPROCESSABLE_ENTITY
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.LOCKED: {
      responseStatus.status = CodeError.LOCKED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.FAILED_DEPENDENCY: {
      responseStatus.status = CodeError.FAILED_DEPENDENCY
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.TOO_EARLY: {
      responseStatus.status = CodeError.TOO_EARLY
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.UPGRADE_REQUIRED: {
      responseStatus.status = CodeError.UPGRADE_REQUIRED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.PRECONDITION_REQUIRED: {
      responseStatus.status = CodeError.PRECONDITION_REQUIRED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.TOO_MANY_REQUESTS: {
      responseStatus.status = CodeError.TOO_MANY_REQUESTS
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.REQUEST_HEADER_FIELDS_TOO_LARGE: {
      responseStatus.status = CodeError.REQUEST_HEADER_FIELDS_TOO_LARGE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.UNAVAILABLE_FOR_LEGAL_REASONS: {
      responseStatus.status = CodeError.UNAVAILABLE_FOR_LEGAL_REASONS
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.INTERNAL_SERVER_ERROR: {
      responseStatus.status = CodeError.INTERNAL_SERVER_ERROR
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.NOT_IMPLEMENTED: {
      responseStatus.status = CodeError.NOT_IMPLEMENTED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.BAD_GATEWAY: {
      responseStatus.status = CodeError.BAD_GATEWAY
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.SERVICE_UNAVAILABLE: {
      responseStatus.status = CodeError.SERVICE_UNAVAILABLE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.GATEWAY_TIMEOUT: {
      responseStatus.status = CodeError.GATEWAY_TIMEOUT
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.HTTP_VERSION_NOT_SUPPORTED: {
      responseStatus.status = CodeError.HTTP_VERSION_NOT_SUPPORTED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.VARIANT_ALSO_NEGOTIATES: {
      responseStatus.status = CodeError.VARIANT_ALSO_NEGOTIATES
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.INSUFFICIENT_STORAGE: {
      responseStatus.status = CodeError.INSUFFICIENT_STORAGE
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.LOOP_DETECTED: {
      responseStatus.status = CodeError.LOOP_DETECTED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.NOT_EXTENDED: {
      responseStatus.status = CodeError.NOT_EXTENDED
      res.status(responseStatus.status).send(responseStatus)
      break
    }
    case CodeError.NETWORK_AUTHENTICATION_REQUIRED: {
      responseStatus.status = CodeError.NETWORK_AUTHENTICATION_REQUIRED
      res.status(responseStatus.status).send(responseStatus)
      break
    }

    default: {
      res.status(responseStatus.status).send(responseStatus)
      break
    }
  }
}
