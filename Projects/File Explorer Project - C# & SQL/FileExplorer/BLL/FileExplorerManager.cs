using System;
using BOL;
using DAL;

namespace BLL
{
    public class FileExplorerManager
    {
        //
        // Summary:
        //    Creates a new instance of the class 'SearchDetail' from EF
        //    and returns the "SearchID" before displaying the results.
        //
        // Parameters:
        //   searchDetailModel:
        //     Contains user search information
        //
        // Returns:
        //     Returns "SearchID" to a new 'SearchResultModel'.
        //
        public int AddNewSearch(SearchDetailModel searchDetailModel)
        {
            using (FileExplorerEntities ef = new FileExplorerEntities())
            {
                Search_Detail item = new Search_Detail
                {
                    DirectoryPath = searchDetailModel.DirectoryPath,
                    SearchTime = searchDetailModel.SearchTime,
                    KeyWord = searchDetailModel.KeyWord
                };

                ef.Search_Details.Add(item);
                ef.SaveChanges();
                return item.SearchDetailsID;
            }
        }

        //
        // Summary:
        //    Creates a new instance of the class 'SearchResult' from EF
        //
        // Parameters:
        //   searchResult:
        //     Contains user 'SearchResult'
        //
        // Returns:
        //     Returns void
        //
        public void UpdateDbResults(SearchResultModel searchResult)
        {
            try
            {
                using (FileExplorerEntities ef = new FileExplorerEntities())
                {
                    Search_Result newSearchResults = new Search_Result
                    {
                        SearchDetailsID = searchResult.SearchID,
                        FullPath = searchResult.FullPath
                    };
                    ef.Search_Results.Add(newSearchResults);
                    ef.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
