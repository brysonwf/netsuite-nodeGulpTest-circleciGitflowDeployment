/**
 *@author brysonfaggart
 */

function returnRecieved() {

  try {
    nlapiLogExecution(NS_LOG_SLUG_DEBUG, 'start', 'start');

  } catch (error) {
    nlapiLogExecution(NS_LOG_SLUG_DEBUG, 'error' , error+' :: '+error.stack);
  }


}