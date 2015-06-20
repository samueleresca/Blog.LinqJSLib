using System.Web;
using System.Web.Mvc;

namespace Blog.LinqJSlib
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}