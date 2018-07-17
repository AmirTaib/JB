using BOL;
using System;
using System.IO;

namespace BLL
{
    public class FilesResultManager : SearchResultModel
    {
        //
        // Counts the number of results to notify the user if no results match the search.
        //
        public int CounterResults { get; set; } = 0;

        public event Action<string> FileActionHandler;

        //
        // Summary:
        //    A function protected containing the Event 'FileActionHandler' 
        //    ==> So that the event can also be used in the inheritens class.
        //
        // Parameters:
        //   filePath:
        //     Contains result of the user search.
        //
        // Returns:
        //     Returns void.
        //
        protected virtual void OnFileActionHandler(string filePath)
        {
            FileActionHandler?.Invoke(filePath);
        }

        //
        // Summary:
        //    Recursive function,
        //    The search function that searches on the user's computer 
        //    and throws an event whenever a file matching the search word is found.
        //
        // Parameters:
        //   originalDirectory:
        //     The primary directory where the user wants to perform the search.
        //   directory:
        //     Current directory in which the search is performed
        //   filePath:
        //     The word that the user is looking for
        //
        // Returns:
        //     Returns void
        //
        public void GetAllFiles(string originalDirectory, string directory, string filePath)
        {
            try
            {
                foreach (var f in Directory.GetFiles(directory, $"*{filePath}*"))
                {
                    CounterResults++;
                    OnFileActionHandler(f);
                }

                foreach (var d in Directory.GetDirectories(directory))
                {
                    try
                    {
                        GetAllFiles(originalDirectory, d, filePath);
                    }
                    catch (Exception e)
                    {
                        e.Message.ToString();
                    }
                }
            }
            catch (Exception e)
            {
                e.Message.ToString();
            }
        }
    }
}
